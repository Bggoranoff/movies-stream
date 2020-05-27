module.exports = {
    format: (title) => {
        let arr = title.split(" ");
        arr = arr.map(word => word.toLowerCase()).map(word => word.chatAt(0).toUpperCase());
        arr[0].charAt(0).toUpperCase();
        return arr.join("");
    }
}