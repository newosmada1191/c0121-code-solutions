select "firstName",
       "lastName",
       "castMembers"."filmId",
       "films"."title"
 from "actors"
 join "castMembers" using ("actorId")
 join "films" using ("filmId")
where "title" = 'Jersey Sassy'
