import { Select } from 'src/ui/select';
import { OptionType, fontColors } from 'src/constants/articleProps';

type SelectedFontColorProps = {
	selected: OptionType;
	onChange: (option: OptionType) => void;
};

export const SelectedFontColors = ({
	selected,
	onChange,
}: SelectedFontColorProps) => {
	return (
		<Select
			selected={selected}
			options={fontColors}
			onChange={onChange}
			title='Цвет шрифта'
		/>
	);
};
