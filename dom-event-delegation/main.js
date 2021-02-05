var $taskList = document.querySelector('.task-list');

function clicks(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    var $list = event.target.closest('.task-list-item');
    console.log($list);
    $list.remove();
  }
}

$taskList.addEventListener('click', clicks);
