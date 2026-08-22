import { Select } from 'src/ui/select';
import { OptionType, backgroundColors } from 'src/constants/articleProps';

type SelectedBackgroundColorProps = {
	selected: OptionType;
	onChange: (option: OptionType) => void;
};

export const BackgroundColorSelect = ({
	selected,
	onChange,
}: SelectedBackgroundColorProps) => {
	return (
		<Select
			selected={selected}
			options={backgroundColors}
			onChange={onChange}
			title='Цвет фона'
		/>
	);
};
