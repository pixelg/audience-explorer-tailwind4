TRUNCATE TABLE media_companies CASCADE;

INSERT INTO "public"."media_companies" ("name", "created", "modified")
SELECT 'FAST Channel A', now(), now() WHERE NOT EXISTS (SELECT 1 FROM "public"."media_companies" WHERE "name" = 'FAST Channel A');

INSERT INTO "public"."media_companies" ("name", "created", "modified")
SELECT 'Local Broadcaster B', now(), now() WHERE NOT EXISTS (SELECT 1 FROM "public"."media_companies" WHERE "name" = 'Local Broadcaster B');

INSERT INTO "public"."media_companies" ("name", "created", "modified")
SELECT 'MVPD C', now(), now() WHERE NOT EXISTS (SELECT 1 FROM "public"."media_companies" WHERE "name" = 'MVPD C');

