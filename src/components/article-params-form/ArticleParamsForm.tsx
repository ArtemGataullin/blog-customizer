import { useState } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Separator } from 'src/ui/separator';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { SelectedFont } from 'src/components/article-params-form/ElementForm/SelectFont';
import { RadioGroupFontSize } from 'src/components/article-params-form/ElementForm/RadioGroupFontSize';
import { SelectedFontColors } from 'src/components/article-params-form/ElementForm/SelectedFontColor';
import { SelectedBackgroundColors } from 'src/components/article-params-form/ElementForm/SelectedBackgroundColor';
import { SelectedContentWidth } from 'src/components/article-params-form/ElementForm/SelectedContentWidth';

import {
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';

type ArticleParamsFormProps = {
	onApply: (state: ArticleStateType) => void;
	onReset: () => void;
};

export const ArticleParamsForm = ({
	onApply,
	onReset,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);
	const toggleMenu = () => {
		setIsOpen((isOpen) => !isOpen);
	};
	const handleApply = (e: React.FormEvent) => {
		e.preventDefault();
		onApply(formState);
		setIsOpen(false);
	};

	const handleReset = () => {
		setFormState(defaultArticleState);
		onReset();
	};

	const updateFormState = <K extends keyof ArticleStateType>(
		key: K,
		value: ArticleStateType[K]
	) => {
		setFormState((prev) => ({ ...prev, [key]: value }));
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleMenu} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={handleApply}>
					<h1 className={styles.title__form}>Задайте Параметры</h1>
					<SelectedFont
						selected={formState.fontFamilyOption}
						onChange={(option) => updateFormState('fontFamilyOption', option)}
					/>
					<RadioGroupFontSize
						selected={formState.fontSizeOption}
						onChange={(option) => updateFormState('fontSizeOption', option)}
					/>
					<SelectedFontColors
						selected={formState.fontColor}
						onChange={(option) => updateFormState('fontColor', option)}
					/>
					<Separator />
					<SelectedBackgroundColors
						selected={formState.backgroundColor}
						onChange={(option) => updateFormState('backgroundColor', option)}
					/>
					<SelectedContentWidth
						selected={formState.contentWidth}
						onChange={(option) => updateFormState('contentWidth', option)}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
