CREATE TABLE "characters" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"race" varchar(255) NOT NULL,
	"description" TEXT NOT NULL,
	"age" bigint NOT NULL,
	"height" bigint NOT NULL,
	"u_obj" varchar(255) NOT NULL UNIQUE,
	"sex" varchar(255) NOT NULL,
    "image" TEXT,
	CONSTRAINT "characters_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO 
characters ("name", race, description, age, height, u_obj, sex, image) 
VALUES
('Baby Yoda', 'Tridactyls', 'Baby Yoda; simplesmente o melhor personagem de todos os tempos', 900, 42, 'jedi_suite', 'male','https://media.vanityfair.com/photos/5dd70131e78810000883f587/4:3/w_1115,h_836,c_limit/baby-yoda-craze.jpg');
