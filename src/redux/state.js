export const initialState = {
  contacts: [],
  status: 'idle', // 'idle' | 'pending' | 'resolved' | 'rejected'
  error: null,
  filter: '',
}