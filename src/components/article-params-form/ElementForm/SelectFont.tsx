import { Select } from 'src/ui/select';
import { OptionType, fontFamilyOptions } from 'src/constants/articleProps';

type SelectedFontProps = {
	selected: OptionType;
	onChange: (option: OptionType) => void;
};

export const SelectedFont = ({ selected, onChange }: SelectedFontProps) => {
	return (
		<Select
			selected={selected}
			options={fontFamilyOptions}
			onChange={onChange}
			title='Шрифт'
		/>
	);
};
