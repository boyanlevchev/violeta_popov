import text from '../dummy_text';

export function retrieveContent() {
 // TODO: Api call! For now, simulate a DB
 return {
 type: 'RETRIEVE_CONTENT',
 payload: text
 }
}
