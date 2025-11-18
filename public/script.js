const output = document.getElementById('output');
const btnFull = document.getElementById('btn-full');
const btnVeg = document.getElementById('btn-veg');
const btnCats = document.getElementById('btn-cats');

function showError(msg){
  output.innerHTML = `<p class="error">${msg}</p>`;
}

function formatPrice(n){
  return "₹" + n.toString();
}

function renderMenu(items){
  if(!items.length){
    output.innerHTML = '<p>No items found.</p>';
    return;
  }
  output.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    const left = document.createElement('div');
    const title = document.createElement('div');
    title.innerHTML = `<strong>${item.name}</strong>`;
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerText = `${item.category} • ${formatPrice(item.price)}`;
    const desc = document.createElement('div');
    desc.style.marginTop = '6px';
    desc.innerText = item.description;
    left.appendChild(title);
    left.appendChild(meta);
    left.appendChild(desc);

    const right = document.createElement('div');
    right.style.textAlign = 'right';
    if(item.isVegetarian){
      const badge = document.createElement('div');
      badge.className = 'veg-badge';
      badge.innerText = 'VEG';
      right.appendChild(badge);
    } else {
      const nv = document.createElement('div');
      nv.className = 'meta';
      nv.innerText = 'Non-Veg';
      right.appendChild(nv);
    }

    card.appendChild(left);
    card.appendChild(right);
    output.appendChild(card);
  });
}

function renderCategories(categories){
  if(!categories.length){
    output.innerHTML = '<p>No categories found.</p>';
    return;
  }
  output.innerHTML = '<div class="categories-list"></div>';
  const list = document.querySelector('.categories-list');
  categories.forEach(c => {
    const pill = document.createElement('div');
    pill.className = 'cat-pill';
    pill.innerText = `${c.name} (${c.itemCount})`;
    list.appendChild(pill);
  });
}

async function fetchAndRender(path, renderer){
  try{
    output.innerHTML = '<p>Loading...</p>';
    const res = await fetch(path);
    if(!res.ok) throw new Error('Network response was not ok: ' + res.status);
    const data = await res.json();
    renderer(data);
  } catch (err){
    showError('Failed to fetch data. ' + err.message);
    console.error(err);
  }
}

btnFull.addEventListener('click', () => fetchAndRender('/menu', renderMenu));
btnVeg.addEventListener('click', () => fetchAndRender('/menu/vegetarian', renderMenu));
btnCats.addEventListener('click', () => fetchAndRender('/menu/categories', (d)=>renderCategories(d.categories || [])));

