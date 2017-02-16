create table instruments (
 id bigserial primary key,
 name varchar(50) not null,
 family varchar(50) not null,
 pitch varchar(30),
 sounds varchar(30),
 transposes varchar(30),
 clef varchar(30)
);

insert into instruments (
  name,
  family,
  pitch,
  sounds,
  transposes,
  clef
) values (
  'Trumpet',
  'Brass',
  'B-flat',
  'M2 lower',
  'M2 higher',
  'Treble'
),
(
  'Trombone',
  'Brass',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Bass'
),
(
  'Bass Trombone',
  'Brass',
  'Concert Pitch',
  'P8 lower',
  'P8 higher',
  'Bass'
),
(
  'Tuba',
  'Brass',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Bass'
),
(
  'French Horn',
  'Brass',
  'F natural',
  'P5 lower',
  'P5 higher',
  'Treble'
),
(
  'Coronet',
  'Brass',
  'B-flat',
  'M2 lower',
  'M2 higher',
  'Treble'
),
(
  'Drums',
  'Percussion',
  '',
  '',
  '',
  ''
),
(
  'Cymbals',
  'Percussion',
  '',
  '',
  '',
  ''
),
(
  'Piano',
  'Percussion',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Grand Staff'
),
(
  'Triangle',
  'Percussion',
  '',
  '',
  '',
  ''
),
(
  'Chimes',
  'Percussion',
  '',
  '',
  '',
  ''
),
(
  'Glockenspiel',
  'Percussion',
  '',
  '',
  '',
  ''
),
(
  'Timpani',
  'Percussion',
  '',
  '',
  '',
  ''
),
(
  'Bells',
  'Percussion',
  '',
  '',
  '',
  ''
),
(
  'Xylophone',
  'Percussion',
  '',
  '',
  '',
  ''
),
(
  'Vibraphone',
  'Percussion',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Grand Staff'
),
(
  'Mirimba',
  'Percussion',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Treble'
),
(
  'Harpsichord',
  'Strings',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Grand Staff'
),
(
  'Violin',
  'Strings',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Treble'
),
(
  'Cello',
  'Strings',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Bass'
),
(
  'Viola',
  'Strings',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Alto,Treble'
),
(
  'Harp',
  'Strings',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Grand Staff'
),
(
  'Guitar',
  'Strings',
  'n/a',
  'P8 Lower',
  'P8 higher',
  'Treble'
),
(
  'Double Bass',
  'Strings',
  'n/a',
  'P8 lower',
  'Bass',
  ''
),
(
  'Flute',
  'Woodwinds',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Treble'
),
(
  'Piccolo',
  'Woodwinds',
  'n/a',
  'P8 higher',
  'P8 lower',
  'Treble'
),
(
  'Clarinet',
  'Woodwinds',
  'Bb',
  'M2 lower',
  'M2 higher',
  'Treble'
),
(
  'Clarinet',
  'Woodwinds',
  'A',
  'm3 lower',
  'm3 higher',
  'Treble'
),
(
  'Clarinet',
  'Woodwinds',
  'Eb',
  'M6 lower',
  'M6 higher',
  'Treble'
),
(
  'Bass Clarinet',
  'Woodwinds',
  'Bb',
  'M9 lower',
  'M9 higher',
  'Bass'
),
(
  'Bassoon',
  'Woodwinds',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Bass'
),
(
  'Contrabassoon',
  'Woodwinds',
  'n/a',
  'P8 lower',
  'P8 higher',
  'Bass'
),
(
  'Oboe',
  'Woodwinds',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Treble'
),
(
  'Organ',
  'Woodwinds',
  'Concert Pitch',
  'Concert Pitch',
  'none',
  'Treble'
);
