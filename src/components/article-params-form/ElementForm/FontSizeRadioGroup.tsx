import { RadioGroup } from 'src/ui/radio-group';
import { OptionType, fontSizeOptions } from 'src/constants/articleProps';

type RadioGroupFontSizeProps = {
	selected: OptionType;
	onChange: (option: OptionType) => void;
};

export const FontSizeRadioGroup = ({
	selected,
	onChange,
}: RadioGroupFontSizeProps) => {
	return (
		<RadioGroup
			name='size'
			selected={selected}
			options={fontSizeOptions}
			onChange={onChange}
			title='Размер шрифта'
		/>
	);
};
