/* Replace with your SQL commands */

-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    "UserID" integer NOT NULL,
    "USerEmail" character varying(60) COLLATE pg_catalog."default",
    "UserPassword" character varying(100) COLLATE pg_catalog."default",
    "UserFirstName" character varying(20) COLLATE pg_catalog."default",
    "UserLastName" character varying(20) COLLATE pg_catalog."default",
    "UserCity" character varying(40) COLLATE pg_catalog."default",
    "UserCountry" character varying(60) COLLATE pg_catalog."default",
    "UserAddress" character varying(150) COLLATE pg_catalog."default",
    "UserCNIC" character varying(15) COLLATE pg_catalog."default",
    "UserPhone" character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT "UserID" PRIMARY KEY ("UserID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;


    -- Table: public.columns

-- DROP TABLE IF EXISTS public.columns;

CREATE TABLE IF NOT EXISTS public.columns
(
    "ColumnID" integer NOT NULL,
    "ColumnTitle" character varying(150) COLLATE pg_catalog."default",
    "ColumnDescription" character varying(1000) COLLATE pg_catalog."default",
    "ColumnPublicationDate" date,
    "ColumnBillingStatus" bit(1),
    "UserID" integer,
    CONSTRAINT "ColumnID" PRIMARY KEY ("ColumnID"),
    CONSTRAINT "UserID" FOREIGN KEY ("UserID")
        REFERENCES public.users ("UserID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.columns
    OWNER to postgres;
-- Index: fki_UserID

-- DROP INDEX IF EXISTS public."fki_UserID";

CREATE INDEX IF NOT EXISTS "fki_UserID"
    ON public.columns USING btree
    ("UserID" ASC NULLS LAST)
    TABLESPACE pg_default;



    -- Table: public.payments

-- DROP TABLE IF EXISTS public.payments;

CREATE TABLE IF NOT EXISTS public.payments
(
    "payment_ID" integer NOT NULL,
    "UserID" integer,
    "ColumnID" integer,
    "PaymentDate" date,
    "PaymentAmount" integer,
    "PaymentStatus" boolean,
    CONSTRAINT payments_pkey PRIMARY KEY ("payment_ID"),
    CONSTRAINT "ColumnID" FOREIGN KEY ("ColumnID")
        REFERENCES public.columns ("ColumnID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "UserID" FOREIGN KEY ("UserID")
        REFERENCES public.users ("UserID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.payments
    OWNER to postgres;
-- Index: fki_ColumnID

-- DROP INDEX IF EXISTS public."fki_ColumnID";

CREATE INDEX IF NOT EXISTS "fki_ColumnID"
    ON public.payments USING btree
    ("ColumnID" ASC NULLS LAST)
    TABLESPACE pg_default;