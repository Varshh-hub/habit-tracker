function addHabit() {
    const habitInput = document.getElementById('habitInput');
    const habitText = habitInput.value.trim();
    
    if (habitText === '') {
      alert('Please enter a habit.');
      return;
    }
  
    const habitList = document.getElementById('habitList');
  
    const li = document.createElement('li');
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${habitText}</span>
      <button class="delete-btn" onclick="deleteHabit(this)">Delete</button>
    `;
  
    habitList.appendChild(li);
    habitInput.value = '';
  }
  
  function toggleComplete(span) {
    if (span.classList.contains('completed')) {
      span.classList.remove('completed');
    } else {
      span.classList.add('completed');
    }
  }
  
  function deleteHabit(button) {
    button.parentElement.remove();
  }
  