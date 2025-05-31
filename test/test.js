import {BinaryTree} from "../tree.js"

(async ()=>{
	
	let tree = new BinaryTree();
	await tree.remove(["Jesus","Allah","Mohammed","God"]);
	await tree.push("John");
	await tree.push("Eve");
	await tree.push("Eve");
	await tree.push("Satan");
	await tree.push(["Mary","Joseph","Jesus","God"]);
	await tree.push("Paul");
	await tree.push("Mohammed");
	await tree.push("Allah");
	await tree.push("Adam");
	await tree.push(["Adam", "Eve", "Lucifer","Lilith","Satan"]);
	await tree.remove("Satan");
	await tree.remove("Joseph");
	await tree.push("Eve");

	let data = tree.export();
	assert (tree.stats.total() === 18)
	assert (tree.stats.removed === 4)
	assert (tree.stats.duplicates === 4)
	assert (data === [
	  'Adam',    'Eve',
	  'John',    'Lilith',
	  'Lucifer', 'Mary',
	  'Paul'
	]);
})()