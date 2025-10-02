import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function POST(req: Request) {
  const session = await getServerSession(options);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadResult: any = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "profile_pics" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(buffer);
  });

  // uložit URL do DB
  await prisma.user.update({
    where: { email: session.user.email },
    data: { image: uploadResult.secure_url },
  });

  return NextResponse.json({ url: uploadResult.secure_url });
}
