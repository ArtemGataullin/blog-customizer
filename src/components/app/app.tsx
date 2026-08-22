import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './../../constants/articleProps';

import styles from './app.module.scss';

export const App = () => {
	const [pageSelectedOptionsState, setPageSelectedOptionsState] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageSelectedOptionsState.fontFamilyOption.value,
					'--font-size': pageSelectedOptionsState.fontSizeOption.value,
					'--font-color': pageSelectedOptionsState.fontColor.value,
					'--container-width': pageSelectedOptionsState.contentWidth.value,
					'--bg-color': pageSelectedOptionsState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				onApply={setPageSelectedOptionsState}
				onReset={() => setPageSelectedOptionsState(defaultArticleState)}
			/>
			<Article />
		</main>
	);
};
