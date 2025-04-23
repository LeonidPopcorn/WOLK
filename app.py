from flask import Flask, render_template, jsonify, request, redirect

app = Flask(__name__)

# Главная страница перенаправляет на /feed
@app.route('/')
def home():
    return redirect('/feed')

# Страница ленты
@app.route('/feed')
def feed():
    return render_template('feed.html')

# API для ленты
@app.route('/api/feed')
def api_feed():
    filter_type = request.args.get('filter', 'all')
    if filter_type == 'all':
        data = [
            {
                'category': 'КОПИРАЙТИНГ',
                'title': 'Написать текст',
                'description': 'Нужно написать статью и поправить текст, в документе...',
                'price': '$50',
                'time_ago': '2 часа назад'
            }
        ]
    else:
        data = []
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, extra_files=['./templates/base.html'])