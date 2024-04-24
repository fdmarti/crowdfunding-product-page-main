import { resetStateProjectCards } from '@/data';
import { onMounted, provide, ref, watch } from 'vue';

export const useModalStatus = () => {
	const showBackProjectModal = ref(false);
	const showCompletedModal = ref(false);

	watch(showBackProjectModal, (newValue) => {
		if (!newValue) {
			resetStateProjectCards();
		}
	});

	const updateModalStatus = () => {
		showBackProjectModal.value = !showBackProjectModal.value;
		checkModalState();
	};

	const updateModalCompletedStatus = () => {
		showCompletedModal.value = !showCompletedModal.value;
		checkModalState();
	};

	const checkModalState = () => {
		if (showBackProjectModal.value) {
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.documentElement.style.overflow = 'auto';
		}
	};

	onMounted(() => checkModalState());

	provide('ModalBackProject', {
		showBackProjectModal,
		updateModalStatus,
	});

	provide('ModalCompleted', {
		showCompletedModal,
		updateModalCompletedStatus,
	});

	return {
		showBackProjectModal,
		showCompletedModal,
	};
};
