-- public.administrador definition

-- Drop table

-- DROP TABLE public.administrador;

CREATE TABLE public.administrador (
	correo text NOT NULL,
	contrasena varchar(120) NOT NULL,
	pnomombre varchar(80) NOT NULL,
	snomombre varchar(80) NOT NULL,
	apellidop varchar(80) NOT NULL,
	apellidom varchar(80) NOT NULL,
	CONSTRAINT administrador_pkey PRIMARY KEY (correo)
);


-- public.beneficio definition

-- Drop table

-- DROP TABLE public.beneficio;

CREATE TABLE public.beneficio (
	idbeneficio varchar(10) NOT NULL,
	nombrebeneficio varchar(240) NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT beneficio_pkey PRIMARY KEY (idbeneficio)
);


-- public.comuna definition

-- Drop table

-- DROP TABLE public.comuna;

CREATE TABLE public.comuna (
	idcomuna serial4 NOT NULL,
	nombrecomuna varchar(320) NULL,
	CONSTRAINT comuna_pkey PRIMARY KEY (idcomuna)
);


-- public.usuario definition

-- Drop table

-- DROP TABLE public.usuario;

CREATE TABLE public.usuario (
	rut varchar(20) NOT NULL,
	contrasena varchar(120) NOT NULL,
	pnombre varchar(80) NOT NULL,
	snombre varchar(80) NOT NULL,
	apellidop varchar(80) NOT NULL,
	apellidom varchar(80) NOT NULL,
	correo text NOT NULL,
	CONSTRAINT usuario_pkey PRIMARY KEY (rut)
);


-- public.direccion definition

-- Drop table

-- DROP TABLE public.direccion;

CREATE TABLE public.direccion (
	tipo bpchar(1) NOT NULL,
	numero float4 NOT NULL,
	nombre varchar(30) NOT NULL,
	idcomuna int4 NOT NULL,
	rutusuario varchar(20) NULL,
	CONSTRAINT direccion_pkey PRIMARY KEY (tipo, numero, nombre, idcomuna),
	CONSTRAINT direccion_idcomuna_fkey FOREIGN KEY (idcomuna) REFERENCES public.comuna(idcomuna),
	CONSTRAINT direccion_rutusuario_fkey FOREIGN KEY (rutusuario) REFERENCES public.usuario(rut)
);


-- public.formulario definition

-- Drop table

-- DROP TABLE public.formulario;

CREATE TABLE public.formulario (
	idformulario serial4 NOT NULL,
	correo text NULL,
	rut varchar(20) NULL,
	fecha date NULL,
	situacion float4 NULL DEFAULT 0,
	CONSTRAINT formulario_pkey PRIMARY KEY (idformulario),
	CONSTRAINT formulario_correo_fkey FOREIGN KEY (correo) REFERENCES public.administrador(correo),
	CONSTRAINT formulario_rut_fkey FOREIGN KEY (rut) REFERENCES public.usuario(rut)
);


-- public.formulariobeneficio definition

-- Drop table

-- DROP TABLE public.formulariobeneficio;

CREATE TABLE public.formulariobeneficio (
	idformulario int4 NOT NULL,
	idbeneficio varchar(10) NOT NULL,
	admisibilidad bool NULL,
	CONSTRAINT formulariobeneficio_pkey PRIMARY KEY (idformulario, idbeneficio),
	CONSTRAINT formulariobeneficio_idbeneficio_fkey FOREIGN KEY (idbeneficio) REFERENCES public.beneficio(idbeneficio),
	CONSTRAINT formulariobeneficio_idformulario_fkey FOREIGN KEY (idformulario) REFERENCES public.formulario(idformulario)
);


-- public.documento definition

-- Drop table

-- DROP TABLE public.documento;

CREATE TABLE public.documento (
	iddocumento serial4 NOT NULL,
	tipo varchar(2) NOT NULL,
	ruta text NOT NULL,
	idformulario int4 NOT NULL,
	CONSTRAINT documento_pkey PRIMARY KEY (iddocumento),
	CONSTRAINT documento_idformulario_fkey FOREIGN KEY (idformulario) REFERENCES public.formulario(idformulario)
);