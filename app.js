// ==========================================
// 1. DOM ELEMANLARINI SEÇME
// ==========================================
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');
const addNoteBtn = document.getElementById('add-note-btn');
const notesList = document.getElementById('notes-list');

const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// ==========================================
// 2. DURUM (STATE) DEĞİŞKENLERİ (LocalStorage'dan oku)
// ==========================================
let todosArray = JSON.parse(localStorage.getItem('myTodos')) || [];
let notesArray = JSON.parse(localStorage.getItem('myNotes')) || [];

// ==========================================
// 3. YAPILACAKLAR (TODO) İŞLEMLERİ
// ==========================================
function saveTodosToStorage() {
    localStorage.setItem('myTodos', JSON.stringify(todosArray));
}

function renderTodos() {
    todoList.innerHTML = ""; // Ekranı temizle
    
    todosArray.forEach(function(todoItem, index) {
        const li = document.createElement('li');
        li.classList.add('list-item');
        
        const span = document.createElement('span');
        span.textContent = todoItem.text;
        
        if (todoItem.isCompleted) {
            li.classList.add('completed');
        }

        // Göreve tıklanınca tamamlandı durumunu değiştir
        span.addEventListener('click', function() {
            todosArray[index].isCompleted = !todosArray[index].isCompleted;
            saveTodosToStorage();
            renderTodos();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Sil';
        deleteBtn.classList.add('delete-btn');
        
        // Silme işlemi
        deleteBtn.addEventListener('click', function() {
            todosArray.splice(index, 1);
            saveTodosToStorage();
            renderTodos();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Görev Ekleme Butonu
addTodoBtn.addEventListener('click', function() {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    todosArray.push({
        text: taskText,
        isCompleted: false
    });

    saveTodosToStorage();
    renderTodos();
    todoInput.value = ""; 
});

// Enter tuşu ile görev ekleme
todoInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") addTodoBtn.click();
});


// ==========================================
// 4. NOTLAR (NOTES) İŞLEMLERİ
// ==========================================
function saveNotesToStorage() {
    localStorage.setItem('myNotes', JSON.stringify(notesArray));
}

function renderNotes() {
    notesList.innerHTML = ""; // Ekranı temizle

    notesArray.forEach(function(noteItem, index) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('list-item');
        noteDiv.style.flexDirection = 'column';
        noteDiv.style.alignItems = 'flex-start';

        const h3 = document.createElement('h3');
        h3.textContent = noteItem.title;
        h3.style.marginBottom = '5px';

        const p = document.createElement('p');
        p.textContent = noteItem.content;
        p.style.marginBottom = '10px';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Sil';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.style.alignSelf = 'flex-end';

        // Not silme işlemi
        deleteBtn.addEventListener('click', function() {
            notesArray.splice(index, 1);
            saveNotesToStorage();
            renderNotes();
        });

        noteDiv.appendChild(h3);
        noteDiv.appendChild(p);
        noteDiv.appendChild(deleteBtn);
        notesList.appendChild(noteDiv);
    });
}

// Not Ekleme Butonu
addNoteBtn.addEventListener('click', function() {
    const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();
    
    if (title === "" || content === "") {
        alert("Lütfen başlık ve içerik girin.");
        return;
    }

    notesArray.push({
        title: title,
        content: content
    });

    saveNotesToStorage();
    renderNotes();
    
    noteTitleInput.value = "";
    noteContentInput.value = "";
});


// ==========================================
// 5. SAYFA YÜKLENDİĞİNDE ÇALIŞTIRILACAKLAR
// ==========================================
renderTodos();
renderNotes();