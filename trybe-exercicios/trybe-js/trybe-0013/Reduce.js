const musics = [
	{ title: "Eu nunca amei assim", duration: 4 },
	{ title: "Voce sempre sera", duration: 3 },
	{ title: "Choro me liga", duration: 6 },
	{ title: "To nem ai", duration: 3 },
	{ title: "Nao olho para o lado", duration: 4 },
	{ title: "Evidencias", duration: 3 },
	{ title: "Borbulhas de amor", duration: 4 },
	{ title: "Como vai voce", duration: 4 },
	{ title: "Fim de tarde", duration: 5 },
	{ title: "Ciumenta", duration: 3 },
];

const musicInfo = musics.reduce((acc, music) => {
	acc.totalDuration += music.duration;

	if (!acc.longestDuration || music.duration > acc.longestDuration.duration) {
		acc.longestDuration = music;
	}

	return acc;
}, {totalDuration: 0});

console.log(musicInfo);