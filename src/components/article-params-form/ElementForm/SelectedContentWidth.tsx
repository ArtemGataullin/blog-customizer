import { Select } from 'src/ui/select';
import { OptionType, contentWidthArr } from 'src/constants/articleProps';

type SelectedContentWidthProps = {
	selected: OptionType;
	onChange: (option: OptionType) => void;
};

export const SelectedContentWidth = ({
	selected,
	onChange,
}: SelectedContentWidthProps) => {
	return (
		<Select
			selected={selected}
			options={contentWidthArr}
			onChange={onChange}
			title='Ширина контента'
		/>
	);
};
