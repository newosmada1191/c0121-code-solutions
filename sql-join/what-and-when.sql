select "releaseYear",
       "title",
       "categories"."name" as "genre",
       "filmCategory"."categoryId"
 from "films"
 join "filmCategory" using ("filmId")
 join "categories" using ("categoryId")
where "title" = 'Boogie Amelie'
