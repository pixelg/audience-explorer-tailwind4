TRUNCATE TABLE daypart_cpm CASCADE;
TRUNCATE TABLE monthly_impressions CASCADE;
TRUNCATE TABLE revenue_recovery_audit CASCADE;
TRUNCATE TABLE campaign_performance CASCADE;

-- Seed data for daypart_cpm
INSERT INTO "public"."daypart_cpm" ("media_company_id", "daypart", "cpm_value")
SELECT
    id, 'Peak', 45.00
FROM
    "public"."media_companies"
WHERE
    "name" = 'FAST Channel A' AND
    NOT EXISTS (SELECT 1 FROM "public"."daypart_cpm" WHERE "media_company_id" = "public"."media_companies"."id" AND "daypart" = 'Peak');

INSERT INTO "public"."daypart_cpm" ("media_company_id", "daypart", "cpm_value")
SELECT
    id, 'Low', 12.50
FROM
    "public"."media_companies"
WHERE
    "name" = 'FAST Channel A' AND
    NOT EXISTS (SELECT 1 FROM "public"."daypart_cpm" WHERE "media_company_id" = "public"."media_companies"."id" AND "daypart" = 'Low');

INSERT INTO "public"."daypart_cpm" ("media_company_id", "daypart", "cpm_value")
SELECT
    id, 'Peak', 65.00
FROM
    "public"."media_companies"
WHERE
    "name" = 'Local Broadcaster B' AND
    NOT EXISTS (SELECT 1 FROM "public"."daypart_cpm" WHERE "media_company_id" = "public"."media_companies"."id" AND "daypart" = 'Peak');

INSERT INTO "public"."daypart_cpm" ("media_company_id", "daypart", "cpm_value")
SELECT
    id, 'Low', 18.75
FROM
    "public"."media_companies"
WHERE
    "name" = 'Local Broadcaster B' AND
    NOT EXISTS (SELECT 1 FROM "public"."daypart_cpm" WHERE "media_company_id" = "public"."media_companies"."id" AND "daypart" = 'Low');

-- Seed data for monthly_impressions
INSERT INTO "public"."monthly_impressions" ("media_company_id", "month", "impressions")
SELECT
    id, '2025-03-01', 4500000
FROM
    "public"."media_companies"
WHERE
    "name" = 'FAST Channel A' AND
    NOT EXISTS (SELECT 1 FROM "public"."monthly_impressions" WHERE "media_company_id" = "public"."media_companies"."id" AND "month" = '2025-03-01');

INSERT INTO "public"."monthly_impressions" ("media_company_id", "month", "impressions")
SELECT
    id, '2025-03-01', 3200000
FROM
    "public"."media_companies"
WHERE
    "name" = 'Local Broadcaster B' AND
    NOT EXISTS (SELECT 1 FROM "public"."monthly_impressions" WHERE "media_company_id" = "public"."media_companies"."id" AND "month" = '2025-03-01');

-- Seed data for revenue_recovery_audit
INSERT INTO "public"."revenue_recovery_audit" (
    "media_company_id", "total_ad_inventory", "addressable_percentage",
    "peak_cpm", "low_cpm", "monthly_impressions", "vertical_type"
)
SELECT
    id, 12.5, 14.0, 45.00, 12.50, 4500000, 'FAST'
FROM
    "public"."media_companies"
WHERE
    "name" = 'FAST Channel A' AND
    NOT EXISTS (SELECT 1 FROM "public"."revenue_recovery_audit" WHERE "media_company_id" = "public"."media_companies"."id");

INSERT INTO "public"."revenue_recovery_audit" (
    "media_company_id", "total_ad_inventory", "addressable_percentage",
    "peak_cpm", "low_cpm", "monthly_impressions", "vertical_type"
)
SELECT
    id, 10.0, 22.5, 65.00, 18.75, 3200000, 'Local'
FROM
    "public"."media_companies"
WHERE
    "name" = 'Local Broadcaster B' AND
    NOT EXISTS (SELECT 1 FROM "public"."revenue_recovery_audit" WHERE "media_company_id" = "public"."media_companies"."id");

-- Create sample campaign data
INSERT INTO "public"."ad_campaigns" ("name", "media_company_id", "ad_id")
SELECT 'Spring Promotion 2025', id, 1
FROM "public"."media_companies"
WHERE "name" = 'FAST Channel A' AND
    NOT EXISTS (SELECT 1 FROM "public"."ad_campaigns" WHERE "name" = 'Spring Promotion 2025');

-- Seed campaign performance data for the last 90 days
DO $$
    DECLARE
        campaign_id bigint;
        current_date date := '2025-01-09';
        end_date date := '2025-04-09';
        i int := 0;
    BEGIN
        SELECT id INTO campaign_id FROM "public"."ad_campaigns" WHERE "name" = 'Spring Promotion 2025' LIMIT 1;

        WHILE current_date <= end_date LOOP
                INSERT INTO "public"."campaign_performance" ("campaign_id", "date", "reach", "frequency")
                VALUES (
                           campaign_id,
                           current_date,
                           floor(random() * 400000) + 100000,  -- Random reach between 100,000 and 500,000
                           floor(random() * 5) + 1             -- Random frequency between 1 and 5
                       );

                        current_date := current_date + interval '1 day';
                i := i + 1;
            END LOOP;
    END $$;