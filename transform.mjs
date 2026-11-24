function fail(message) {
    throw new Error(message);
}
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    return Array.from(s).map((c, i) => (i + 1) + '  U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0') + '  ' + JSON.stringify(c)).join('\n')
}
