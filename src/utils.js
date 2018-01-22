const capitalizeFirstLetter = string =>
	string.charAt(0).toUpperCase() + string.slice(1)

export const formatName = string =>
	string
		.split("babel-plugin-")
		.join("")
		.split("@babel/plugin-")
		.join("")
		.split("-")
		.map(word => capitalizeFirstLetter(word))
		.join(" ")
