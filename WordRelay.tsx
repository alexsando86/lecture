import * as React from "react";
import { useState, useRef, useCallback } from "react";

const WordRelay =  () => {
	const [word setWord] = useState('산도');
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');
	const inputEl = useRef<HTMLInputElement>(null);

	const onSubmitForm = useCallback((e: React.FormEvent) => {

	}, []);

	const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {

	}, [])

	return(
		<>
			<div>{word}</div>
			<form onSubmit={onSubmitForm}>
				<input
					ref={inputEl}
					value={value}
					onChange={onChange}
				/>
				<button>입력</button>
			</form>
			<div>{result}</div>
		</>
	)
}

export default WordRelay;