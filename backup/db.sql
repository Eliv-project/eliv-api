--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.1 (Debian 15.1-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: eliv81222
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO eliv81222;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: eliv81222
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Comment; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."Comment" (
    id integer NOT NULL,
    content text NOT NULL,
    "userId" integer NOT NULL,
    "videoId" integer,
    "parentCommentId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Comment" OWNER TO eliv81222;

--
-- Name: Comment_id_seq; Type: SEQUENCE; Schema: public; Owner: eliv81222
--

CREATE SEQUENCE public."Comment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Comment_id_seq" OWNER TO eliv81222;

--
-- Name: Comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eliv81222
--

ALTER SEQUENCE public."Comment_id_seq" OWNED BY public."Comment".id;


--
-- Name: LiveSession; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."LiveSession" (
    id integer NOT NULL,
    status integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "videoId" integer NOT NULL,
    "streamKeyId" integer NOT NULL
);


ALTER TABLE public."LiveSession" OWNER TO eliv81222;

--
-- Name: LiveSession_id_seq; Type: SEQUENCE; Schema: public; Owner: eliv81222
--

CREATE SEQUENCE public."LiveSession_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."LiveSession_id_seq" OWNER TO eliv81222;

--
-- Name: LiveSession_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eliv81222
--

ALTER SEQUENCE public."LiveSession_id_seq" OWNED BY public."LiveSession".id;


--
-- Name: OAuthLink; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."OAuthLink" (
    provider text NOT NULL,
    "providerId" text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."OAuthLink" OWNER TO eliv81222;

--
-- Name: Permission; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."Permission" (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Permission" OWNER TO eliv81222;

--
-- Name: Permission_id_seq; Type: SEQUENCE; Schema: public; Owner: eliv81222
--

CREATE SEQUENCE public."Permission_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Permission_id_seq" OWNER TO eliv81222;

--
-- Name: Permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eliv81222
--

ALTER SEQUENCE public."Permission_id_seq" OWNED BY public."Permission".id;


--
-- Name: PermissionsOnRoles; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."PermissionsOnRoles" (
    "roleId" integer NOT NULL,
    "permissionId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."PermissionsOnRoles" OWNER TO eliv81222;

--
-- Name: Role; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."Role" (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Role" OWNER TO eliv81222;

--
-- Name: Role_id_seq; Type: SEQUENCE; Schema: public; Owner: eliv81222
--

CREATE SEQUENCE public."Role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Role_id_seq" OWNER TO eliv81222;

--
-- Name: Role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eliv81222
--

ALTER SEQUENCE public."Role_id_seq" OWNED BY public."Role".id;


--
-- Name: StreamKey; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."StreamKey" (
    id integer NOT NULL,
    key text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "userId" integer NOT NULL,
    "isDefault" boolean DEFAULT false NOT NULL,
    "desc" text NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."StreamKey" OWNER TO eliv81222;

--
-- Name: StreamKey_id_seq; Type: SEQUENCE; Schema: public; Owner: eliv81222
--

CREATE SEQUENCE public."StreamKey_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."StreamKey_id_seq" OWNER TO eliv81222;

--
-- Name: StreamKey_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eliv81222
--

ALTER SEQUENCE public."StreamKey_id_seq" OWNED BY public."StreamKey".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    username text NOT NULL,
    gender boolean DEFAULT true,
    password text NOT NULL,
    avatar jsonb,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "roleId" integer NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    verified boolean DEFAULT false,
    name text DEFAULT 'UNNAMED_USER'::text NOT NULL
);


ALTER TABLE public."User" OWNER TO eliv81222;

--
-- Name: UserSubscription; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."UserSubscription" (
    "userId" integer NOT NULL,
    "subscribingUserId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."UserSubscription" OWNER TO eliv81222;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: eliv81222
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO eliv81222;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eliv81222
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: Video; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."Video" (
    id integer NOT NULL,
    name text NOT NULL,
    thumbnail jsonb,
    slug text,
    privacy integer DEFAULT 0,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" integer NOT NULL,
    "dirId" text,
    "desc" text,
    "searchableName" text,
    duration double precision DEFAULT 0 NOT NULL
);


ALTER TABLE public."Video" OWNER TO eliv81222;

--
-- Name: Video_id_seq; Type: SEQUENCE; Schema: public; Owner: eliv81222
--

CREATE SEQUENCE public."Video_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Video_id_seq" OWNER TO eliv81222;

--
-- Name: Video_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eliv81222
--

ALTER SEQUENCE public."Video_id_seq" OWNED BY public."Video".id;


--
-- Name: View; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."View" (
    id integer NOT NULL,
    ip text NOT NULL,
    "userId" integer,
    "videoId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."View" OWNER TO eliv81222;

--
-- Name: View_id_seq; Type: SEQUENCE; Schema: public; Owner: eliv81222
--

CREATE SEQUENCE public."View_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."View_id_seq" OWNER TO eliv81222;

--
-- Name: View_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eliv81222
--

ALTER SEQUENCE public."View_id_seq" OWNED BY public."View".id;


--
-- Name: VodSession; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."VodSession" (
    id integer NOT NULL,
    status integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "videoId" integer NOT NULL
);


ALTER TABLE public."VodSession" OWNER TO eliv81222;

--
-- Name: VodSession_id_seq; Type: SEQUENCE; Schema: public; Owner: eliv81222
--

CREATE SEQUENCE public."VodSession_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."VodSession_id_seq" OWNER TO eliv81222;

--
-- Name: VodSession_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eliv81222
--

ALTER SEQUENCE public."VodSession_id_seq" OWNED BY public."VodSession".id;


--
-- Name: Vote; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public."Vote" (
    id integer NOT NULL,
    "voteDirection" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" integer NOT NULL,
    "commentId" integer,
    "videoId" integer
);


ALTER TABLE public."Vote" OWNER TO eliv81222;

--
-- Name: Vote_id_seq; Type: SEQUENCE; Schema: public; Owner: eliv81222
--

CREATE SEQUENCE public."Vote_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Vote_id_seq" OWNER TO eliv81222;

--
-- Name: Vote_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eliv81222
--

ALTER SEQUENCE public."Vote_id_seq" OWNED BY public."Vote".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: eliv81222
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO eliv81222;

--
-- Name: Comment id; Type: DEFAULT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Comment" ALTER COLUMN id SET DEFAULT nextval('public."Comment_id_seq"'::regclass);


--
-- Name: LiveSession id; Type: DEFAULT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."LiveSession" ALTER COLUMN id SET DEFAULT nextval('public."LiveSession_id_seq"'::regclass);


--
-- Name: Permission id; Type: DEFAULT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Permission" ALTER COLUMN id SET DEFAULT nextval('public."Permission_id_seq"'::regclass);


--
-- Name: Role id; Type: DEFAULT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Role" ALTER COLUMN id SET DEFAULT nextval('public."Role_id_seq"'::regclass);


--
-- Name: StreamKey id; Type: DEFAULT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."StreamKey" ALTER COLUMN id SET DEFAULT nextval('public."StreamKey_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Name: Video id; Type: DEFAULT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Video" ALTER COLUMN id SET DEFAULT nextval('public."Video_id_seq"'::regclass);


--
-- Name: View id; Type: DEFAULT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."View" ALTER COLUMN id SET DEFAULT nextval('public."View_id_seq"'::regclass);


--
-- Name: VodSession id; Type: DEFAULT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."VodSession" ALTER COLUMN id SET DEFAULT nextval('public."VodSession_id_seq"'::regclass);


--
-- Name: Vote id; Type: DEFAULT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Vote" ALTER COLUMN id SET DEFAULT nextval('public."Vote_id_seq"'::regclass);


--
-- Data for Name: Comment; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."Comment" (id, content, "userId", "videoId", "parentCommentId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: LiveSession; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."LiveSession" (id, status, "createdAt", "updatedAt", "videoId", "streamKeyId") FROM stdin;
\.


--
-- Data for Name: OAuthLink; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."OAuthLink" (provider, "providerId", "userId") FROM stdin;
google	105001526276738199376	12
\.


--
-- Data for Name: Permission; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."Permission" (id, name) FROM stdin;
1	READ_VIDEO
3	SUPER
2	CREATE_VIDEO
5	MANAGE_VIDEO
6	MANAGE_LIVE_SESSION
4	CREATE_LIVE_SESSION
7	UPDATE_VIDEO
8	READ_LIVE_SESSION
9	DELETE_LIVE_SESSION
10	UPDATE_LIVE_SESSION
11	READ_USER
13	CREATE_USER
12	DELETE_VIDEO
14	UPDATE_USER
15	MANAGE_USER
16	DELETE_USER
\.


--
-- Data for Name: PermissionsOnRoles; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."PermissionsOnRoles" ("roleId", "permissionId", "createdAt") FROM stdin;
1	3	2023-01-31 15:20:27.642
\.


--
-- Data for Name: Role; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."Role" (id, name) FROM stdin;
1	ADMIN
2	NORMAL_USER
\.


--
-- Data for Name: StreamKey; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."StreamKey" (id, key, "createdAt", "userId", "isDefault", "desc", name) FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."User" (id, email, username, gender, password, avatar, "createdAt", "roleId", "updatedAt", verified, name) FROM stdin;
1	Regan.Thompson13@yahoo.com	Regan.Thompson	t	$2b$10$gangNvAh/FZxVZ6iUfYV9uDkP5DAxfFZGwYjwwjxgNc82NRGU8HLW	\N	2023-01-31 15:20:27.879	2	2023-01-31 15:20:27.879	f	UNNAMED_USER
2	Bernhard93@gmail.com	Bernhard_Romaguera5	t	$2b$10$mJkQheDstu0zsg4R5zrnXeEvIv2.lX/CYzdbHYntPkO9JCm/dQeL2	\N	2023-01-31 15:20:27.998	2	2023-01-31 15:20:27.998	f	UNNAMED_USER
3	Alexis34@hotmail.com	Alexis.Johns21	t	$2b$10$A9nAAlKd4vjTFfjVSeCaIO7PP/l4JdFUSQpFh/5jMOuOK2uKpLA.O	\N	2023-01-31 15:20:28.139	2	2023-01-31 15:20:28.139	f	UNNAMED_USER
4	Vernie.Schoen@gmail.com	Vernie.Schoen	t	$2b$10$oZvwtIzJCETW6WqDDTGUUuplhbhDLrKf87yTotZs2Xs.SRogYsB76	\N	2023-01-31 15:20:28.261	2	2023-01-31 15:20:28.261	f	UNNAMED_USER
5	Dorris_Will3@hotmail.com	Dorris_Will	t	$2b$10$MqKiSOOkl8ITOOVhHLVXcurBroZ7Xpy1G1PNG33GzFBkPLOtiM/Im	\N	2023-01-31 15:20:28.383	2	2023-01-31 15:20:28.383	f	UNNAMED_USER
6	Raina_Kilback@yahoo.com	Raina24	t	$2b$10$GIxo6VqthdH7LpT0.a8t8eYozR9ZEm97Kv1vvRktDx3fWjJMwP1cq	\N	2023-01-31 15:20:28.52	2	2023-01-31 15:20:28.52	f	UNNAMED_USER
7	Justyn52@yahoo.com	Justyn22	t	$2b$10$plZuIPgJmFoZ3LtNBwUk3.QkQ1G9/wa3zHqbdBWFEBB5HYFE2sbZq	\N	2023-01-31 15:20:28.642	2	2023-01-31 15:20:28.642	f	UNNAMED_USER
8	Abner.Medhurst61@hotmail.com	Abner.Medhurst	t	$2b$10$l/7e0W5tmfnQLtTLb1j2ju.GQ0pS6ELgfZ3AixM51TZC2GkdZ3s12	\N	2023-01-31 15:20:28.765	2	2023-01-31 15:20:28.765	f	UNNAMED_USER
9	Anissa60@hotmail.com	Anissa_Armstrong8	t	$2b$10$6zfM6erd9Z1iUyqboArmmusUPGj.8ZNtzQvK3gKMxoIM7nXDKeBq.	\N	2023-01-31 15:20:28.886	2	2023-01-31 15:20:28.886	f	UNNAMED_USER
10	Heidi38@gmail.com	Heidi.Dicki	t	$2b$10$7RujIuY25PBlPh9yEFYwje0cr1a4qLSAsill5K1Pjc/d7T0UpQRnq	\N	2023-01-31 15:20:29.018	2	2023-01-31 15:20:29.018	f	UNNAMED_USER
11	dnntung@gmail.com	admin	t	$2b$10$Ucid6ij6mzT.gbaixpzMNeIXD7e0e89Ng0T1HdPyF8Lb4qkVy.lvi	\N	2023-01-31 15:20:29.029	1	2023-01-31 15:20:29.029	t	UNNAMED_USER
12	mini.emeiji@gmail.com	google:105001526276738199376	t	$2b$10$6D2lghv0997qYOftFrXefuaBS/0py1wVxMt150dm2nGn/6UCZZoyi	{"data": {"url": "https://lh3.googleusercontent.com/a/AEdFTp7yjbBiwqG3w8ED6vOBsy7PJwzU0MyvNp_KDWix=s96-c"}, "provider": "google"}	2023-01-31 18:37:35.513	2	2023-01-31 18:37:35.513	f	Touri Dinh
\.


--
-- Data for Name: UserSubscription; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."UserSubscription" ("userId", "subscribingUserId", "createdAt") FROM stdin;
\.


--
-- Data for Name: Video; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."Video" (id, name, thumbnail, slug, privacy, "createdAt", "updatedAt", "userId", "dirId", "desc", "searchableName", duration) FROM stdin;
\.


--
-- Data for Name: View; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."View" (id, ip, "userId", "videoId", "createdAt") FROM stdin;
\.


--
-- Data for Name: VodSession; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."VodSession" (id, status, "createdAt", "updatedAt", "videoId") FROM stdin;
\.


--
-- Data for Name: Vote; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public."Vote" (id, "voteDirection", "createdAt", "updatedAt", "userId", "commentId", "videoId") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: eliv81222
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
43e4189a-d07f-4a3b-ad23-14c360816930	9418dda7eac5db52c74207150f5cff87c51b996d9c5ea3699618fab0883762c4	2023-01-31 15:20:17.728958+00	20230118015345_	\N	\N	2023-01-31 15:20:17.724252+00	1
50880920-abf3-4a7e-be37-29f1a0c47467	34cf7ea8841951356cf8341a3f33389e558ada002603fcf1c06b370e811129de	2023-01-31 15:20:17.45355+00	20221210033616_init	\N	\N	2023-01-31 15:20:17.429263+00	1
cca0011a-4fb2-41b3-bd46-14bf36055604	264c355dfaaac5fd86a52ac90b07806b628b9995c379de903623792493666941	2023-01-31 15:20:17.633237+00	20230109082425_	\N	\N	2023-01-31 15:20:17.629355+00	1
55eacad8-7ed7-4d1b-83f6-123b84c4fdd1	1fe838c35a6bea58e904ff62a7e20fc458d4f3f6fc3db0368fdc2caf8f1b66de	2023-01-31 15:20:17.473274+00	20221210041831_n_to_n_init	\N	\N	2023-01-31 15:20:17.455228+00	1
fa337650-dc6c-4673-abd0-4441410070c0	ddbc332f64368f678cbbfc58413984df2a51b689fe8048aa908ab979a4ac3e08	2023-01-31 15:20:17.511428+00	20221210044214_oauth_link_init	\N	\N	2023-01-31 15:20:17.475019+00	1
53833dc6-c018-4008-aa2a-f06c49bb350b	7690ff077f56d715a1f15bb335eba8ab262d94526a5f876ea3677ae9362f48d0	2023-01-31 15:20:17.519541+00	20221212172413_nullable_avatar	\N	\N	2023-01-31 15:20:17.513634+00	1
148253dc-ecfe-4250-8948-50d6304c32c9	cf87615c6ca19527262e47732e8dac4d8627dae0f38899b7d62624981c3ad29b	2023-01-31 15:20:17.649365+00	20230110160453_	\N	\N	2023-01-31 15:20:17.634619+00	1
f036205b-4e3e-4838-a75f-2892d562bd1f	95714ab8870ff555de87c815506c0a0268399c8f8cb6165fbb7ec5dd151b6348	2023-01-31 15:20:17.537399+00	20221213172444_videos	\N	\N	2023-01-31 15:20:17.521417+00	1
34be4c0b-7f1e-4511-bfaf-271ec0b30620	7e497cb98b89136b29bc59a4d479a398570ffae134770b1c6e64f1562db64df0	2023-01-31 15:20:17.548973+00	20221213173650_video_with_user	\N	\N	2023-01-31 15:20:17.543546+00	1
e3646fcb-eb6e-4e67-9888-abecbe3c7e88	8ba36638125d63893f622a711954e0444f64740355e45c3b198195063be427c7	2023-01-31 15:20:17.956932+00	20230130022045_	\N	\N	2023-01-31 15:20:17.947249+00	1
2109298b-dab8-4218-b3d5-d6b8cbdb6604	4b0d7046fa4804f0c6c4bbf3e3d285f82b2e908dd2f653ce5d7a13b72244d075	2023-01-31 15:20:17.554942+00	20221214180457_init	\N	\N	2023-01-31 15:20:17.55047+00	1
d0363a3f-69d4-4dda-8a19-93186b3f2389	912fda830dea09ce93a7668a34c69adb71e8bf2f9325f58edb2392fcf4ad61a5	2023-01-31 15:20:17.657319+00	20230110161936_	\N	\N	2023-01-31 15:20:17.651446+00	1
485ae553-2a50-4ca7-a72f-014934e11538	da05a431adb7a7887426b5d9094f5419b8165656deb9860269e5e7a900d27dd3	2023-01-31 15:20:17.560361+00	20221214181415_init	\N	\N	2023-01-31 15:20:17.55635+00	1
91120fce-a1d8-4f27-a6ee-933a8a457fe1	f6db059722c76bc6976441d83c44bf5089aa7c2c2cc0477427561cf76b6c7d8b	2023-01-31 15:20:17.567756+00	20221217041418_init	\N	\N	2023-01-31 15:20:17.562352+00	1
1eb9d855-05e6-404a-a09b-42315c65d7d9	f1da0880eaee1d1a5e6ea4d22468d9f80627910d109846ca90859c1cccf43c39	2023-01-31 15:20:17.840004+00	20230118030513_	\N	\N	2023-01-31 15:20:17.731425+00	1
2a483751-3e5c-44b2-9bdc-215d1063bc59	2fb516242fac7332a66b00f9cd14f1b00cfd392be15170c7b6f6367c13777157	2023-01-31 15:20:17.575755+00	20221217041856_init	\N	\N	2023-01-31 15:20:17.569577+00	1
9e205729-f80a-472e-9752-7530ccd09500	d76f39c156fbb2d1aba4e37255c521ad88d0cc2bae1648f3db51a185f9c2cb48	2023-01-31 15:20:17.664695+00	20230111035716_	\N	\N	2023-01-31 15:20:17.658933+00	1
de5e57f9-dca9-4aad-8ff2-23c5da260b11	ef1cf9fa331aa5b0de26064ccd611e5ec967dafe18b0e9be059fbf1534ab2f4a	2023-01-31 15:20:17.583384+00	20230101104819_	\N	\N	2023-01-31 15:20:17.578846+00	1
8c386255-982f-4236-a1d3-82ab2eb00df1	868b0ef7916f5cb80d1236cb18c0030e68ddb3854b7502fb17f8767f9fec5b82	2023-01-31 15:20:17.589762+00	20230104181758_	\N	\N	2023-01-31 15:20:17.585256+00	1
b230abc9-e655-47bd-9532-e32309835e19	060ab7a8f9ba039038facd99e00fdd6100015662eed3680bf0a4e4eee92988e0	2023-01-31 15:20:17.619881+00	20230109081612_	\N	\N	2023-01-31 15:20:17.591321+00	1
f8183253-f9f7-44ca-8482-9e9cfa8af7f2	fc2c5d827a87b09dbb5f451524249984f70c4014225903cf9fb2c187c908b088	2023-01-31 15:20:17.676928+00	20230112031637_	\N	\N	2023-01-31 15:20:17.665955+00	1
f46bb50b-33e8-4a7f-9299-1096c0aaef13	e84d765e4f6a290803d0996ac00d50a163e400613b0dc0921c52f19b0b5245d8	2023-01-31 15:20:17.62745+00	20230109082109_	\N	\N	2023-01-31 15:20:17.621967+00	1
66c9ed19-bb26-4725-9dc5-06a3fdb609ec	e37a9f8e1e8f6ae63cf7405040ea72792c80e001c7c8f66d3a1da7e422a51e69	2023-01-31 15:20:17.690629+00	20230112090524_	\N	\N	2023-01-31 15:20:17.679021+00	1
a4e56dcf-5d43-4d28-b305-7eeb73ff7c22	d97f99cdfcdbff6dfd71f6f80fd497315cb10a1f38adcb16b6694038419a18d4	2023-01-31 15:20:17.897367+00	20230118043138_	\N	\N	2023-01-31 15:20:17.858244+00	1
cb9a0eca-f92d-48a2-b796-1b0e9243de8b	46a734f9b0a9e42714fe7b36d87cab2086245c4369fe0e2904adaa9460b5cd8a	2023-01-31 15:20:17.705505+00	20230112171940_vote	\N	\N	2023-01-31 15:20:17.692339+00	1
2987c8f4-67f5-4d88-bdad-0f44016c4a64	f5730b0a64784c2c37e2cb9c68895180742c6f661e4283b627af16af22b5552c	2023-01-31 15:20:17.714043+00	20230112194644_user_subscriptions	\N	\N	2023-01-31 15:20:17.707354+00	1
2f56693a-4932-4eba-891c-446388cae856	5881ecd7697500711c4cdb7461280bd69d3e817283459ea09529cfb287672177	2023-01-31 15:20:17.721697+00	20230116022246_	\N	\N	2023-01-31 15:20:17.71563+00	1
c8d8002f-d3ac-4e10-8081-fc7f7912cac8	258febd902278c225eb6f67b5c103c142003da6db2d70196d7fc73342c3a9c89	2023-01-31 15:20:17.964103+00	20230130032049_	\N	\N	2023-01-31 15:20:17.959079+00	1
ec318723-3f7d-49ef-a361-8271c3c99270	63a8f2c9320b4b26b7f9179a02121dd7eee895353fa3ca9786eed961cc257273	2023-01-31 15:20:17.905752+00	20230118070004_	\N	\N	2023-01-31 15:20:17.899633+00	1
e2befc70-26e6-47d6-9fd1-982f8a79648c	7b9718f7d88c937343e4f4c48245db6c6e9d645b05fb3e74642d91b3a980f21a	2023-01-31 15:20:17.939286+00	20230118070105_	\N	\N	2023-01-31 15:20:17.907687+00	1
2803e222-fbe2-4b99-806b-2d68f08a14f7	4ec1a18f6576dba9494f80ae270b2c872d6b4b4dc64292953b773fa66289bbfc	2023-01-31 15:20:17.945381+00	20230118070213_	\N	\N	2023-01-31 15:20:17.94113+00	1
81245f64-de25-4982-b5f2-76142b0c1593	0e562984d42aa41e5d608194481b26fd9e390d231c651d340fad9794a88e00c9	2023-01-31 15:20:17.977287+00	20230130040727_	\N	\N	2023-01-31 15:20:17.972556+00	1
c707d41a-af3b-4868-9479-08053f969d25	62445dec6def4adae77f2de57ba7bd96c494db8d3ad0cac05040ec078493441d	2023-01-31 15:20:17.983189+00	20230130044307_	\N	\N	2023-01-31 15:20:17.978914+00	1
\.


--
-- Name: Comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eliv81222
--

SELECT pg_catalog.setval('public."Comment_id_seq"', 1, false);


--
-- Name: LiveSession_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eliv81222
--

SELECT pg_catalog.setval('public."LiveSession_id_seq"', 1, false);


--
-- Name: Permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eliv81222
--

SELECT pg_catalog.setval('public."Permission_id_seq"', 16, true);


--
-- Name: Role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eliv81222
--

SELECT pg_catalog.setval('public."Role_id_seq"', 2, true);


--
-- Name: StreamKey_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eliv81222
--

SELECT pg_catalog.setval('public."StreamKey_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eliv81222
--

SELECT pg_catalog.setval('public."User_id_seq"', 12, true);


--
-- Name: Video_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eliv81222
--

SELECT pg_catalog.setval('public."Video_id_seq"', 1, false);


--
-- Name: View_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eliv81222
--

SELECT pg_catalog.setval('public."View_id_seq"', 1, false);


--
-- Name: VodSession_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eliv81222
--

SELECT pg_catalog.setval('public."VodSession_id_seq"', 1, false);


--
-- Name: Vote_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eliv81222
--

SELECT pg_catalog.setval('public."Vote_id_seq"', 1, false);


--
-- Name: LiveSession LiveSession_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."LiveSession"
    ADD CONSTRAINT "LiveSession_pkey" PRIMARY KEY (id);


--
-- Name: OAuthLink OAuthLink_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."OAuthLink"
    ADD CONSTRAINT "OAuthLink_pkey" PRIMARY KEY (provider, "providerId");


--
-- Name: Permission Permission_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Permission"
    ADD CONSTRAINT "Permission_pkey" PRIMARY KEY (id);


--
-- Name: PermissionsOnRoles PermissionsOnRoles_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."PermissionsOnRoles"
    ADD CONSTRAINT "PermissionsOnRoles_pkey" PRIMARY KEY ("roleId", "permissionId");


--
-- Name: Role Role_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (id);


--
-- Name: StreamKey StreamKey_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."StreamKey"
    ADD CONSTRAINT "StreamKey_pkey" PRIMARY KEY (id);


--
-- Name: UserSubscription UserSubscription_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."UserSubscription"
    ADD CONSTRAINT "UserSubscription_pkey" PRIMARY KEY ("userId", "subscribingUserId");


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: Video Video_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Video"
    ADD CONSTRAINT "Video_pkey" PRIMARY KEY (id);


--
-- Name: View View_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."View"
    ADD CONSTRAINT "View_pkey" PRIMARY KEY (id);


--
-- Name: VodSession VodSession_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."VodSession"
    ADD CONSTRAINT "VodSession_pkey" PRIMARY KEY (id);


--
-- Name: Vote Vote_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Vote"
    ADD CONSTRAINT "Vote_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Comment_id_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "Comment_id_key" ON public."Comment" USING btree (id);


--
-- Name: LiveSession_videoId_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "LiveSession_videoId_key" ON public."LiveSession" USING btree ("videoId");


--
-- Name: OAuthLink_providerId_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "OAuthLink_providerId_key" ON public."OAuthLink" USING btree ("providerId");


--
-- Name: Permission_id_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "Permission_id_key" ON public."Permission" USING btree (id);


--
-- Name: Permission_name_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "Permission_name_key" ON public."Permission" USING btree (name);


--
-- Name: Role_id_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "Role_id_key" ON public."Role" USING btree (id);


--
-- Name: Role_name_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "Role_name_key" ON public."Role" USING btree (name);


--
-- Name: StreamKey_key_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "StreamKey_key_key" ON public."StreamKey" USING btree (key);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_username_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);


--
-- Name: Video_dirId_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "Video_dirId_key" ON public."Video" USING btree ("dirId");


--
-- Name: Video_slug_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "Video_slug_key" ON public."Video" USING btree (slug);


--
-- Name: VodSession_videoId_key; Type: INDEX; Schema: public; Owner: eliv81222
--

CREATE UNIQUE INDEX "VodSession_videoId_key" ON public."VodSession" USING btree ("videoId");


--
-- Name: Comment Comment_parentCommentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES public."Comment"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Comment Comment_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Comment Comment_videoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES public."Video"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: LiveSession LiveSession_streamKeyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."LiveSession"
    ADD CONSTRAINT "LiveSession_streamKeyId_fkey" FOREIGN KEY ("streamKeyId") REFERENCES public."StreamKey"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: LiveSession LiveSession_videoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."LiveSession"
    ADD CONSTRAINT "LiveSession_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES public."Video"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: OAuthLink OAuthLink_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."OAuthLink"
    ADD CONSTRAINT "OAuthLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PermissionsOnRoles PermissionsOnRoles_permissionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."PermissionsOnRoles"
    ADD CONSTRAINT "PermissionsOnRoles_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES public."Permission"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PermissionsOnRoles PermissionsOnRoles_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."PermissionsOnRoles"
    ADD CONSTRAINT "PermissionsOnRoles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: StreamKey StreamKey_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."StreamKey"
    ADD CONSTRAINT "StreamKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: UserSubscription UserSubscription_subscribingUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."UserSubscription"
    ADD CONSTRAINT "UserSubscription_subscribingUserId_fkey" FOREIGN KEY ("subscribingUserId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: UserSubscription UserSubscription_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."UserSubscription"
    ADD CONSTRAINT "UserSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: User User_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Video Video_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Video"
    ADD CONSTRAINT "Video_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: View View_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."View"
    ADD CONSTRAINT "View_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: View View_videoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."View"
    ADD CONSTRAINT "View_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES public."Video"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: VodSession VodSession_videoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."VodSession"
    ADD CONSTRAINT "VodSession_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES public."Video"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Vote Vote_commentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Vote"
    ADD CONSTRAINT "Vote_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES public."Comment"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Vote Vote_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Vote"
    ADD CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Vote Vote_videoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eliv81222
--

ALTER TABLE ONLY public."Vote"
    ADD CONSTRAINT "Vote_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES public."Video"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: eliv81222
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

