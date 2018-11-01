 function myapp_queue(){
    var add_btn = document.querySelector('.add-q');
    var take_btn = document.querySelector('.take-q');
    var input_box = document.querySelector('#input-text-q');
    var queue_overflow = document.querySelector('.queue-overflow');
    var queue_underflow = document.querySelector('.queue-underflow');
    // Hide elements from the DOM 
    queue_overflow.style.display = "none";
    queue_underflow.style.display = "none";
    var queue_value = 0;

    // Create new object queue
    queue = new QueueDataStructure();

    // Control event listeners for add and take buttons in the queue
    add_btn.addEventListener("click", function () {
        queue_underflow.style.display = "none";
        queue_value = input_box.value;
        if (queue.canEnqueue()) {
            queue.enqueue(queue_value);
            queue.queueControl.forEach((element, index) => {
                document.querySelector(`#q${index}`).innerHTML = element;
                document.querySelector(`#q${index}`).classList.add("active-q");
            });
        } else {
            queue_overflow.style.display = "block";
        }

    })

    take_btn.addEventListener("click", function () {
        queue_overflow.style.display = "none";
        queue_value = input_box.value;
        if (!queue.isEmpty()) {
            queue.dequeue();
            var arr = queue.queueControl;
            console.log(arr);
            document.querySelector(`#q${arr.length}`).innerHTML = "";
            document.querySelector(`#q${arr.length}`).classList.remove("active-q");
        } else {
            queue_underflow.style.display = "block";
        }


    })


};

