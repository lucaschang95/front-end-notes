let publisher = {
    subscribers: {
        any: [],
    },
    subscribe: function(fn, type) {
        type = type || 'any';
        if (typeof this.subscribers[type] === 'undefined') {
            this.subscribers[type] = [];
        }
        this.subscriber[type].push(fn);
    },
    unsubscribe: function(fn, type) {
        this.visitSubscribers('publish', publication, type);
    },
    publish: function(publication, type) {
        this.visitSubscribers('publish', publication, type);
    },
    visitSubscribers: function(action, arg, type) {
        let pubType = type || 'any', subscribers = this.subscribers[pubType], max = subscribers.length;
        for (let i = 0; i < max; i++) {
            if (action === 'publish') {
                subscribers[i](arg);
            } else {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    },
};