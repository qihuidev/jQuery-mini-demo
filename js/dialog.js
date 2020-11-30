class Dialog {
    open(type, txt) {
        let obj = $('.' + type);
        $('.mask-' + type).fadeIn(300);
        obj.addClass('ani-open');
        let height = obj.height();
        obj.css('margin-top', '-' + Math.ceil(height / 2) + 'px');
        if (txt !== '') {
            obj.find('.model-text').html(txt);
        }
        obj.show();
        setTimeout(res => {
            obj.removeClass('ani-open');
        }, 300)
    }
    close(type) {
        let obj = $('.' + type);
        $('.mask-' + type).fadeOut(200);
        obj.addClass('ani-close');
        setTimeout(() => {
            obj.hide();
            obj.removeClass('ani-close');
        }, 300);
    }
    toast(type, txt = '', cb, time) {
        this.open(type, txt);
        setTimeout(() => {
            this.close(type);
            if (typeof (cb) !== 'undefined') { cb(); }
        }, time);
    }
    success(type, txt, cb, time = 1600) {
        this.open(type, txt);
        setTimeout(() => {
            this.close(type);
            if (typeof (cb) !== 'undefined') { cb(); }
        }, time);
    }
    error(type, txt, cb, time = 1600) {
        this.open(type, txt);
        setTimeout(() => {
            this.close(type);
            if (typeof (cb) !== 'undefined') { cb(); }
        }, time);
    }
    alert(type, txt = '', cb) {
        this.open(type, txt);
        $('.' + type).find('.model-btn button').click(() => {
            this.close(type);
            if (typeof (cb) !== 'undefined') { cb(); }
        })
    }

}

let dialog = new Dialog()