export const Action = Object.freeze({
    LoadNotes: 'LoadNotes',
});

export function loadNotes(notes) {
    return {
        type: Action.LoadNotes,
        payload: notes,
    };
}