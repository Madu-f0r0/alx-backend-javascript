export default function returnHowManyArguments(...argv) {
    let argc = 0;
    for (const arg of argv) {
        argc++;
    }

    return argc;
}