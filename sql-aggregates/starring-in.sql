select "name" as "genre",
       count("filmCategory"."categoryId")
  from "categories"
  join "filmCategory" using ("categoryId")
  join "castMembers" using ("filmId")
 where "actorId" = 178
group by "categories"."name";
