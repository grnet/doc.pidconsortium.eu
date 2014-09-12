module TabsHelper

  def tabs
    @items.select { |item| item[:kind] == 'code' }
  end

  def render_child(name)
    @items.select { |item| item[:parent] == name }.sort_by{ |item| item[:order] }
  end
  def render_response(nameres)
    @items.select { |item| item[:parent] == nameres }
  end

end

include TabsHelper
