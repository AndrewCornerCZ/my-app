// Vytvoření constraintů pro unikátní vlastnosti
CREATE CONSTRAINT user_email_unique IF NOT EXISTS FOR (u:User) REQUIRE u.email IS UNIQUE;
CREATE CONSTRAINT user_username_unique IF NOT EXISTS FOR (u:User) REQUIRE u.username IS UNIQUE;
CREATE CONSTRAINT hashtag_text_unique IF NOT EXISTS FOR (h:Hashtag) REQUIRE h.text IS UNIQUE;

// Vytvoření indexů pro lepší výkon
CREATE INDEX user_id_index IF NOT EXISTS FOR (u:User) ON u.id;
CREATE INDEX post_id_index IF NOT EXISTS FOR (p:Post) ON p.id;
CREATE INDEX comment_id_index IF NOT EXISTS FOR (c:Comment) ON c.id;
CREATE INDEX hashtag_id_index IF NOT EXISTS FOR (h:Hashtag) ON h.id;

// Definice základních uzlů a jejich vlastností
// User node
CREATE (u:User {
  id: apoc.create.uuid(),
  email: $email,
  username: $username,
  password: $password,
  followersCount: 0,
  followingCount: 0
});

// Post node
CREATE (p:Post {
  id: apoc.create.uuid(),
  created_at: datetime(),
  text: $text,
  likes: 0
});

// Comment node
CREATE (c:Comment {
  id: apoc.create.uuid(),
  text: $text,
  createdAt: datetime()
});

// Hashtag node
CREATE (h:Hashtag {
  id: apoc.create.uuid(),
  text: $text
});

// Definice vztahů
// User -> Post (AUTHORED)
MATCH (u:User), (p:Post)
WHERE u.id = $userId AND p.id = $postId
CREATE (u)-[:AUTHORED]->(p);

// User -> User (FOLLOWS)
MATCH (u1:User), (u2:User)
WHERE u1.id = $followerId AND u2.id = $followingId
CREATE (u1)-[:FOLLOWS]->(u2);

// User -> Post (LIKES)
MATCH (u:User), (p:Post)
WHERE u.id = $userId AND p.id = $postId
CREATE (u)-[:LIKES {createdAt: datetime()}]->(p);

// Post -> Hashtag (HAS_TAG)
MATCH (p:Post), (h:Hashtag)
WHERE p.id = $postId AND h.id = $hashtagId
CREATE (p)-[:HAS_TAG]->(h);

// Post -> Comment (HAS_COMMENT)
MATCH (p:Post), (c:Comment)
WHERE p.id = $postId AND c.id = $commentId
CREATE (p)-[:HAS_COMMENT]->(c);

// User -> Comment (AUTHORED_COMMENT)
MATCH (u:User), (c:Comment)
WHERE u.id = $userId AND c.id = $commentId
CREATE (u)-[:AUTHORED_COMMENT]->(c);