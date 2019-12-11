select posts.post_id, users.username, users.profile_pic, posts.title, posts.img, posts.post
from posts
inner join users on posts.author_id=users.user_id;