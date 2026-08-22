import { useState, useEffect, useRef } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Separator } from 'src/ui/separator';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { FontSelect } from 'src/components/article-params-form/ElementForm/FontSelect';
import { FontSizeRadioGroup } from 'src/components/article-params-form/ElementForm/FontSizeRadioGroup';
import { FontColorSelect } from 'src/components/article-params-form/ElementForm/FontColorSelect';
import { BackgroundColorSelect } from 'src/components/article-params-form/ElementForm/BackgroundColorSelect';
import { ContentWidthSelected } from 'src/components/article-params-form/ElementForm/ContentWidthSelected';

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
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const toggleSidebar = () => {
		setIsFormOpen((isFormOpen) => !isFormOpen);
	};
	const closeSidebar = () => {
		setIsFormOpen(false);
	};
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(e.target as Node)
			) {
				closeSidebar();
			}
		};
		if (isFormOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isFormOpen]);
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isFormOpen) {
				closeSidebar();
			}
		};
		if (isFormOpen) {
			document.addEventListener('keydown', handleEscape);
		}
		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isFormOpen]);
	const handleApply = (e: React.FormEvent) => {
		e.preventDefault();
		onApply(formState);
		closeSidebar();
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
			<ArrowButton isOpen={isFormOpen} onClick={toggleSidebar} />
			<aside
				ref={sidebarRef}
				className={clsx(styles.container, {
					[styles.container_open]: isFormOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={handleApply}
					onReset={handleReset}>
					<h1 className={styles.title__form}>Задайте Параметры</h1>
					<FontSelect
						selected={formState.fontFamilyOption}
						onChange={(option) => updateFormState('fontFamilyOption', option)}
					/>
					<FontSizeRadioGroup
						selected={formState.fontSizeOption}
						onChange={(option) => updateFormState('fontSizeOption', option)}
					/>
					<FontColorSelect
						selected={formState.fontColor}
						onChange={(option) => updateFormState('fontColor', option)}
					/>
					<Separator />
					<BackgroundColorSelect
						selected={formState.backgroundColor}
						onChange={(option) => updateFormState('backgroundColor', option)}
					/>
					<ContentWidthSelected
						selected={formState.contentWidth}
						onChange={(option) => updateFormState('contentWidth', option)}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
