function collect_same_elements(collection_a, collection_b) {
	var arr = [];

	for (var i = 0, len = collection_a.length; i < len; i++) {
		if (collection_b.indexOf(collection_a[i]) != -1) {
			arr.push(collection_a[i]);
		}
	}

	return arr;
}

module.exports = collect_same_elements;