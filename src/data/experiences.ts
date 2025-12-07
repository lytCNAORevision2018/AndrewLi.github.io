interface Experience {
	title: string;
	time: string;
	img_path: string;
	description: string;
	link: string;
}

const experiences: Experience[] = [
    {
		title: "苏州大学轨道交通学院",
		time: "2026.9-2029.6（预计）",
		img_path: "/experiences/suda.ps",
		description: `交通运输工程专业交通运输规划与管理方向全日制学术学位硕士研究生，推免`,
		link: "https://jtxy.suda.edu.cn/"
	},
	{
		title: "苏州大学轨道交通学院",
		time: "2022.9 - 2026.6",
		img_path: "/experiences/suda.ps",
		description: `
           交通运输专业本科生`,
		link: "https://jtxy.suda.edu.cn/"
	}
]

export {experiences, type Experience}
