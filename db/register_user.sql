insert into users (
    username,
    userpassword
) values (
    ${username},
    ${hash}
)
returning username, user_id;