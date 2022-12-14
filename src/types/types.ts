export interface ModalState {
  isOpen: boolean;
  feedbackMessage: string;
  isError: boolean;
}

export interface UiState {
  modal: ModalState;
  isLoading: boolean;
}

export interface OpenModalPayload {
  feedbackMessage: string;
  isError: boolean;
}

export interface JwtCustomPayload {
  id: string;
  username: string;
  accesstoken: string;
}
