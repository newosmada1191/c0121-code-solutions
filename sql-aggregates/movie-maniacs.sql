select "firstName",
       "lastName",
       sum("amount") as "total"
  from "payments"
  join "customers" using ("customerId")
group by "customers"."customerId"
order by "total" desc;
