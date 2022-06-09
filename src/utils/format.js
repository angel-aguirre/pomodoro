export const formatTime = (mins, secs) => {
    return ('0' + mins).slice(-2) + ':' + ('0' + secs).slice(-2);
};
