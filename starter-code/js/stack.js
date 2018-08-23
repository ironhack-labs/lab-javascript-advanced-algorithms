let $list = $('.list');
let $addBtn = $('.add');
let $takeBtn = $('.take');
let $input = $('input');
let $warnAlert = $('.warning.over');
let $warnAlertUnder = $('.warning.under');

let stack = new StackDataStructure(8);

$addBtn.click(() => {
    let $value = $input.val();
    let $freeBlock = $list.find('.free');


    if( stack.canPush() ) {
        if($warnAlertUnder.css('display') !== 'none') {
            $warnAlertUnder.hide();
        }

        let $lastEl =  $($freeBlock[$freeBlock.length - 1]);
        $lastEl.html(`<span> ${$value} </span>`);
        let stackNew = stack.push($lastEl);
        $input.val('');

        if(!stack.canPush()) {
            $warnAlert.show();
            console.log(stack.stackControl);
        }

        stackNew[stackNew.length - 1].toggleClass('free');
        stackNew[stackNew.length - 1].toggleClass('busy');

    }
});

$takeBtn.click(() => {
    let delEl = stack.pop();

    if(delEl === 'Stack Underflow') {
        $warnAlertUnder.show();
    } else {
        if($warnAlert.css('display') !== 'none') {
            $warnAlert.hide();
        }
        delEl.html(' ');
        delEl.toggleClass('busy');
        delEl.toggleClass('free');
    }
});