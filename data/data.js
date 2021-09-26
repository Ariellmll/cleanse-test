module.exports.foo = {
    a: 'foo',
    b: 'bar',
    c: null,
    d: undefined,
    e: 0,
    f: {
        a: 'fuz',
        b: null,
        c: {
            a: 'biz',
            b: 'buz',
            c: [{
                    a: 'foo',
                    b: 'bar',
                    c: null,
                    d: undefined,
                    e: 0,
                    f: false
                },
                {
                    a: 'foo',
                    b: 'bar',
                    c: null,
                    d: undefined,
                    e: 0
                },
                {
                    a: 'foo',
                    b: 'bar',
                    c: null,
                    d: undefined,
                    e: 0
                }
            ]
        }
    }
};

module.exports.result = {
    a: "foo",
    b: "bar",
    e: 0,
    f: {
        a: "fuz",
        c: {
            a: "biz",
            b: "buz",
            c: [{
                    a: "foo",
                    b: "bar",
                    e: 0,
                    f: false
                },
                {
                    a: "foo",
                    b: "bar",
                    e: 0
                },
                {
                    a: "foo",
                    b: "bar",
                    e: 0
                }
            ]
        }
    }
};