TRUNCATE TABLE ad_inventory CASCADE;

-- Seed data for ad_inventory
INSERT INTO "public"."ad_inventory" ("media_company_id", "total_minutes_per_hour", "addressable_percentage")
SELECT
    id, 12.5, 14.0
FROM
    "public"."media_companies"
WHERE
    "name" = 'FAST Channel A' AND
    NOT EXISTS (SELECT 1 FROM "public"."ad_inventory" WHERE "media_company_id" = "public"."media_companies"."id");

INSERT INTO "public"."ad_inventory" ("media_company_id", "total_minutes_per_hour", "addressable_percentage")
SELECT
    id, 10.0, 22.5
FROM
    "public"."media_companies"
WHERE
    "name" = 'Local Broadcaster B' AND
    NOT EXISTS (SELECT 1 FROM "public"."ad_inventory" WHERE "media_company_id" = "public"."media_companies"."id");

INSERT INTO "public"."ad_inventory" ("media_company_id", "total_minutes_per_hour", "addressable_percentage")
SELECT
    id, 14.0, 35.0
FROM
    "public"."media_companies"
WHERE
    "name" = 'MVPD C' AND
    NOT EXISTS (SELECT 1 FROM "public"."ad_inventory" WHERE "media_company_id" = "public"."media_companies"."id");