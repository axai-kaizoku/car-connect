import { CarProps } from '@/types';

interface CarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	car: CarProps;
}

export default function CarDetails({
	car,
	closeModal,
	isOpen,
}: CarDetailsProps) {
	return <div>CarDetails</div>;
}
