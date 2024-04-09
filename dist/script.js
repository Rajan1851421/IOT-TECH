var glide02 = new Glide('.glide-02', {
    type: 'slider',
    focusAt: 'center',
    perView: 1,
    autoplay: 3500,
    animationDuration: 700,
    gap: 0,
    classes: {
        activeNav: '[&>*]:bg-slate-700',
    },

});

glide02.mount();

