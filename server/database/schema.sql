create table user (
  id int unsigned primary key auto_increment not null,
  firstname varchar(80) not null,
  lastname varchar(80) not null,
  metier varchar(80) not null,
  email varchar(80) not null unique,
  userpassword varchar(20) not null,
  github varchar(80) not null,
  linkedin varchar(80) not null
);

create table experience (
  id int unsigned primary key auto_increment not null,
  organisation varchar(80) not null,
  poste varchar(255) not null,
  content TEXT,
  user_id int unsigned not null,
  foreign key(user_id) references user(id) ON DELETE CASCADE
);

create table projet (
  id int unsigned primary key auto_increment not null,
  title varchar(80) not null,
  descript TEXT,
  nameofteam varchar(155) not null,
  picture varchar(80) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id) ON DELETE CASCADE
);

-- create table item (
--   id int unsigned primary key auto_increment not null,
--   title varchar(255) not null,
--   user_id int unsigned not null,
--   foreign key(user_id) references user(id)
-- );

-- insert into user(id, email, password)
-- values
--   (1, "jdoe@mail.com", "123456");

-- insert into item(id, title, user_id)
-- values
--   (1, "Stuff", 1),
--   (2, "Doodads", 1);
