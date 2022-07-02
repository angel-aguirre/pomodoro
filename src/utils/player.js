export const audioPlayer = (fileName) => {
    const audio = new Audio(require(`@/assets/audio/${fileName}`));

    return audio;
};
